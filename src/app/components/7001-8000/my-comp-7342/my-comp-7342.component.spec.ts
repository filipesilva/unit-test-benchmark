import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7342Component } from './my-comp-7342.component';

describe('MyComp7342Component', () => {
  let component: MyComp7342Component;
  let fixture: ComponentFixture<MyComp7342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
