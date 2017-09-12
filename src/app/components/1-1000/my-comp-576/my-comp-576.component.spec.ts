import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp576Component } from './my-comp-576.component';

describe('MyComp576Component', () => {
  let component: MyComp576Component;
  let fixture: ComponentFixture<MyComp576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
