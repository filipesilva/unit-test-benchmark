import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5598Component } from './my-comp-5598.component';

describe('MyComp5598Component', () => {
  let component: MyComp5598Component;
  let fixture: ComponentFixture<MyComp5598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
