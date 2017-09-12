import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4436Component } from './my-comp-4436.component';

describe('MyComp4436Component', () => {
  let component: MyComp4436Component;
  let fixture: ComponentFixture<MyComp4436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
