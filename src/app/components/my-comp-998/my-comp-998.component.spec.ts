import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp998Component } from './my-comp-998.component';

describe('MyComp998Component', () => {
  let component: MyComp998Component;
  let fixture: ComponentFixture<MyComp998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp998Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
