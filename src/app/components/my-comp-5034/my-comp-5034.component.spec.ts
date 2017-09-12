import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5034Component } from './my-comp-5034.component';

describe('MyComp5034Component', () => {
  let component: MyComp5034Component;
  let fixture: ComponentFixture<MyComp5034Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5034Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
