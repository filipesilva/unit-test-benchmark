import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5554Component } from './my-comp-5554.component';

describe('MyComp5554Component', () => {
  let component: MyComp5554Component;
  let fixture: ComponentFixture<MyComp5554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
