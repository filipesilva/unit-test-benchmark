import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5672Component } from './my-comp-5672.component';

describe('MyComp5672Component', () => {
  let component: MyComp5672Component;
  let fixture: ComponentFixture<MyComp5672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
