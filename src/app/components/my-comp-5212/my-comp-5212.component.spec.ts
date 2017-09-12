import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5212Component } from './my-comp-5212.component';

describe('MyComp5212Component', () => {
  let component: MyComp5212Component;
  let fixture: ComponentFixture<MyComp5212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
