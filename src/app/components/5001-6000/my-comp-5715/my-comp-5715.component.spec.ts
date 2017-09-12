import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5715Component } from './my-comp-5715.component';

describe('MyComp5715Component', () => {
  let component: MyComp5715Component;
  let fixture: ComponentFixture<MyComp5715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
