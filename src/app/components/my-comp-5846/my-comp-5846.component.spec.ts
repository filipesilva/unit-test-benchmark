import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5846Component } from './my-comp-5846.component';

describe('MyComp5846Component', () => {
  let component: MyComp5846Component;
  let fixture: ComponentFixture<MyComp5846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
