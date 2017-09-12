import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3820Component } from './my-comp-3820.component';

describe('MyComp3820Component', () => {
  let component: MyComp3820Component;
  let fixture: ComponentFixture<MyComp3820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
