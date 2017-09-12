import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4308Component } from './my-comp-4308.component';

describe('MyComp4308Component', () => {
  let component: MyComp4308Component;
  let fixture: ComponentFixture<MyComp4308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
