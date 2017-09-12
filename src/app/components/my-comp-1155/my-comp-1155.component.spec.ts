import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1155Component } from './my-comp-1155.component';

describe('MyComp1155Component', () => {
  let component: MyComp1155Component;
  let fixture: ComponentFixture<MyComp1155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
