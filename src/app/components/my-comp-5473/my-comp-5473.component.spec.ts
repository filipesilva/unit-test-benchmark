import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5473Component } from './my-comp-5473.component';

describe('MyComp5473Component', () => {
  let component: MyComp5473Component;
  let fixture: ComponentFixture<MyComp5473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
