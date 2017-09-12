import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5790Component } from './my-comp-5790.component';

describe('MyComp5790Component', () => {
  let component: MyComp5790Component;
  let fixture: ComponentFixture<MyComp5790Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5790Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
