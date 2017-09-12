import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7461Component } from './my-comp-7461.component';

describe('MyComp7461Component', () => {
  let component: MyComp7461Component;
  let fixture: ComponentFixture<MyComp7461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7461Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
