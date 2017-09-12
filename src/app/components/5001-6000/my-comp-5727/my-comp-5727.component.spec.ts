import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5727Component } from './my-comp-5727.component';

describe('MyComp5727Component', () => {
  let component: MyComp5727Component;
  let fixture: ComponentFixture<MyComp5727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
