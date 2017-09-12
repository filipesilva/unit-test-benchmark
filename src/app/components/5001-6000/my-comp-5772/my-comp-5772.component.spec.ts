import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5772Component } from './my-comp-5772.component';

describe('MyComp5772Component', () => {
  let component: MyComp5772Component;
  let fixture: ComponentFixture<MyComp5772Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5772Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
