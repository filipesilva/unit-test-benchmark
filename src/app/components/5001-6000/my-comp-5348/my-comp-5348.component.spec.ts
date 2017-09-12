import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5348Component } from './my-comp-5348.component';

describe('MyComp5348Component', () => {
  let component: MyComp5348Component;
  let fixture: ComponentFixture<MyComp5348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
