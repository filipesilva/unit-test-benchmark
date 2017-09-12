import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2738Component } from './my-comp-2738.component';

describe('MyComp2738Component', () => {
  let component: MyComp2738Component;
  let fixture: ComponentFixture<MyComp2738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
