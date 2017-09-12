import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5053Component } from './my-comp-5053.component';

describe('MyComp5053Component', () => {
  let component: MyComp5053Component;
  let fixture: ComponentFixture<MyComp5053Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5053Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
