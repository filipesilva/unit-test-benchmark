import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9076Component } from './my-comp-9076.component';

describe('MyComp9076Component', () => {
  let component: MyComp9076Component;
  let fixture: ComponentFixture<MyComp9076Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9076Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
