import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5755Component } from './my-comp-5755.component';

describe('MyComp5755Component', () => {
  let component: MyComp5755Component;
  let fixture: ComponentFixture<MyComp5755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
