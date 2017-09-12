import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7308Component } from './my-comp-7308.component';

describe('MyComp7308Component', () => {
  let component: MyComp7308Component;
  let fixture: ComponentFixture<MyComp7308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
