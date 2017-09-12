import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5288Component } from './my-comp-5288.component';

describe('MyComp5288Component', () => {
  let component: MyComp5288Component;
  let fixture: ComponentFixture<MyComp5288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
