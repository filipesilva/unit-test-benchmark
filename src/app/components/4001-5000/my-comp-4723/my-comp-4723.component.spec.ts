import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4723Component } from './my-comp-4723.component';

describe('MyComp4723Component', () => {
  let component: MyComp4723Component;
  let fixture: ComponentFixture<MyComp4723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
