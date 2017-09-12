import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7009Component } from './my-comp-7009.component';

describe('MyComp7009Component', () => {
  let component: MyComp7009Component;
  let fixture: ComponentFixture<MyComp7009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
