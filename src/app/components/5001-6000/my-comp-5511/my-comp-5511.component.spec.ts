import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5511Component } from './my-comp-5511.component';

describe('MyComp5511Component', () => {
  let component: MyComp5511Component;
  let fixture: ComponentFixture<MyComp5511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
