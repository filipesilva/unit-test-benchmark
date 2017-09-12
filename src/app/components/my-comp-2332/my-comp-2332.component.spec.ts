import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2332Component } from './my-comp-2332.component';

describe('MyComp2332Component', () => {
  let component: MyComp2332Component;
  let fixture: ComponentFixture<MyComp2332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
