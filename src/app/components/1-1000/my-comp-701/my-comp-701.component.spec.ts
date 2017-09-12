import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp701Component } from './my-comp-701.component';

describe('MyComp701Component', () => {
  let component: MyComp701Component;
  let fixture: ComponentFixture<MyComp701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
