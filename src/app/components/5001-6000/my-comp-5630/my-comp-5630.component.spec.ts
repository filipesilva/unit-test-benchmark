import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5630Component } from './my-comp-5630.component';

describe('MyComp5630Component', () => {
  let component: MyComp5630Component;
  let fixture: ComponentFixture<MyComp5630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
