import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4672Component } from './my-comp-4672.component';

describe('MyComp4672Component', () => {
  let component: MyComp4672Component;
  let fixture: ComponentFixture<MyComp4672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
