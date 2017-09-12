import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp321Component } from './my-comp-321.component';

describe('MyComp321Component', () => {
  let component: MyComp321Component;
  let fixture: ComponentFixture<MyComp321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
