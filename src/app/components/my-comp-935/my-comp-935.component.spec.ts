import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp935Component } from './my-comp-935.component';

describe('MyComp935Component', () => {
  let component: MyComp935Component;
  let fixture: ComponentFixture<MyComp935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
