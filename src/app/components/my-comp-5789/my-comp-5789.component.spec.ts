import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5789Component } from './my-comp-5789.component';

describe('MyComp5789Component', () => {
  let component: MyComp5789Component;
  let fixture: ComponentFixture<MyComp5789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
