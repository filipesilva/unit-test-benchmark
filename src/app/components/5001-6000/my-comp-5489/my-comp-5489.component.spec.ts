import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5489Component } from './my-comp-5489.component';

describe('MyComp5489Component', () => {
  let component: MyComp5489Component;
  let fixture: ComponentFixture<MyComp5489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
