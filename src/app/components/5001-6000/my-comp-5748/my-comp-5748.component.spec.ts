import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5748Component } from './my-comp-5748.component';

describe('MyComp5748Component', () => {
  let component: MyComp5748Component;
  let fixture: ComponentFixture<MyComp5748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5748Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
