import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5128Component } from './my-comp-5128.component';

describe('MyComp5128Component', () => {
  let component: MyComp5128Component;
  let fixture: ComponentFixture<MyComp5128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
