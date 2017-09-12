import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3650Component } from './my-comp-3650.component';

describe('MyComp3650Component', () => {
  let component: MyComp3650Component;
  let fixture: ComponentFixture<MyComp3650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
