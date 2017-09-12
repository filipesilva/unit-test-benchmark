import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4685Component } from './my-comp-4685.component';

describe('MyComp4685Component', () => {
  let component: MyComp4685Component;
  let fixture: ComponentFixture<MyComp4685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
