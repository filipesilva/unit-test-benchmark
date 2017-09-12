import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2935Component } from './my-comp-2935.component';

describe('MyComp2935Component', () => {
  let component: MyComp2935Component;
  let fixture: ComponentFixture<MyComp2935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
