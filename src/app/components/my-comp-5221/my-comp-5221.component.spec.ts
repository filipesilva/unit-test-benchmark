import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5221Component } from './my-comp-5221.component';

describe('MyComp5221Component', () => {
  let component: MyComp5221Component;
  let fixture: ComponentFixture<MyComp5221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
