import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5434Component } from './my-comp-5434.component';

describe('MyComp5434Component', () => {
  let component: MyComp5434Component;
  let fixture: ComponentFixture<MyComp5434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
