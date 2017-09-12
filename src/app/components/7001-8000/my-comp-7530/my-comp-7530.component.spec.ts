import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7530Component } from './my-comp-7530.component';

describe('MyComp7530Component', () => {
  let component: MyComp7530Component;
  let fixture: ComponentFixture<MyComp7530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
