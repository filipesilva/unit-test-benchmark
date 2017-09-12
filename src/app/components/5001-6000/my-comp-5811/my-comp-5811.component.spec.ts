import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5811Component } from './my-comp-5811.component';

describe('MyComp5811Component', () => {
  let component: MyComp5811Component;
  let fixture: ComponentFixture<MyComp5811Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5811Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
