import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9068Component } from './my-comp-9068.component';

describe('MyComp9068Component', () => {
  let component: MyComp9068Component;
  let fixture: ComponentFixture<MyComp9068Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9068Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
