import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1308Component } from './my-comp-1308.component';

describe('MyComp1308Component', () => {
  let component: MyComp1308Component;
  let fixture: ComponentFixture<MyComp1308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
