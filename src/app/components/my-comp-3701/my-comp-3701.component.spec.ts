import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3701Component } from './my-comp-3701.component';

describe('MyComp3701Component', () => {
  let component: MyComp3701Component;
  let fixture: ComponentFixture<MyComp3701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
