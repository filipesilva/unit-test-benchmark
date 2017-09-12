import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5741Component } from './my-comp-5741.component';

describe('MyComp5741Component', () => {
  let component: MyComp5741Component;
  let fixture: ComponentFixture<MyComp5741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
