import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7324Component } from './my-comp-7324.component';

describe('MyComp7324Component', () => {
  let component: MyComp7324Component;
  let fixture: ComponentFixture<MyComp7324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
