import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2432Component } from './my-comp-2432.component';

describe('MyComp2432Component', () => {
  let component: MyComp2432Component;
  let fixture: ComponentFixture<MyComp2432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
