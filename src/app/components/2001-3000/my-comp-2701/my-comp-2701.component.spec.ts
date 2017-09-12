import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2701Component } from './my-comp-2701.component';

describe('MyComp2701Component', () => {
  let component: MyComp2701Component;
  let fixture: ComponentFixture<MyComp2701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
